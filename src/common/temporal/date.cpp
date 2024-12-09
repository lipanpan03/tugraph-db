/**
 * Copyright 2024 AntGroup CO., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 */

#include <set>

#include <date/tz.h>
#include <date/iso_week.h>

#include "common/exceptions.h"
#include "common/temporal/date.h"
#include "common/temporal/temporal_pattern.h"
#include "common/value.h"

namespace {

enum class DateType {
    CALENDER_DATE = 0,
    WEEK_DATE = 1,
    QUATER_DATE = 2,
    ORDINAL_DATE = 3,
    TIMEZONE_DATE = 4,
};

void validateDateParams(
    const std::unordered_map<std::string, Value>& params_map) {
    const static std::unordered_map<
        std::string, std::pair<std::set<std::string>, std::string>>
        fieldConflictMap{
            {DATE_WEEK,
             {{DATE_MONTH, DATE_ORDINAL, DATE_DAY, DATE_DOQ, DATE_QUARTER},
              "Cannot assign {} to week date."}},
            {DATE_MONTH,
             {{DATE_QUARTER, DATE_ORDINAL},
              "Cannot assign {} to calendar date."}},
            {DATE_DAY, {{DATE_QUARTER}, "Cannot assign {} to calendar date."}},
            {DATE_DOQ, {{DATE_MONTH}, "Cannot assign {} to quarter date."}},
            {DATE_ORDINAL,
             {{DATE_DAY, DATE_QUARTER}, "Cannot assign {} to ordinal date."}}};

    const static std::unordered_map<std::string, std::string> fieldGroup{
        {DATE_DAY, DATE_MONTH},
        {DATE_DOQ, DATE_QUARTER},
        {DATE_DOW, DATE_WEEK}};

    if (params_map.count(DATE_TIMEZONE) && params_map.size() > 1) {
        THROW_CODE(InputError,
                   "Cannot assign time zone if also assigning other fields.");
    }

    // handle field conflict
    for (const auto& [param, _] : params_map) {
        if (fieldConflictMap.count(param)) {
            const auto& fieldConflict = fieldConflictMap.at(param);
            for (const auto& rhs : fieldConflict.first) {
                if (params_map.count(rhs)) {
                    THROW_CODE(InputError, fieldConflict.second.c_str(), rhs);
                }
            }
        }
    }

    // `year` must be specified, except for ordinal day
    if (params_map.count(DATE_YEAR) == 0 &&
        (params_map.count(DATE_ORDINAL) == 0 &&
         params_map.count(DATE_DATE) == 0 &&
         params_map.count(DATE_DATETIME) == 0 &&
         params_map.count(DATE_TIMEZONE) == 0)) {
        THROW_CODE(InputError, "year must be specified");
    }

    // handle field group
    if (params_map.count(DATE_DATE) != 0 && params_map.count(DATE_DATETIME) != 0) {
        for (const auto& [param, _] : params_map) {
            if (fieldGroup.count(param)) {
                if (params_map.count(fieldGroup.at(param)) == 0) {
                    THROW_CODE(InputError, "{} can not be specified without {}",
                               param, fieldGroup.at(param));
                }
            }
        }
    }
}

}  // namespace

namespace common {

void Date::fromYearMonthDay(int year, unsigned month, unsigned day) {
    date::year_month_day ymd = date::year_month_day{
        date::year{year}, date::month{month}, date::day{day}};
    if (ymd.ok()) {
        auto ld = (date::local_days)ymd;
        days_since_epoch_ = ld.time_since_epoch().count();
    } else {
        std::ostringstream oss;
        oss << ymd;
        THROW_CODE(InputError, "{}", oss.str());
    }
}

void Date::fromYearMonthDay(const Date& base_date, std::optional<int> year,
                            std::optional<unsigned int> month, std::optional<unsigned int> day) {
    date::year_month_day ymd = date::year_month_day{date::local_days(date::days(base_date.days_since_epoch_))};
    int target_year = year.has_value() ? year.value() : (int)ymd.year();
    unsigned target_month = month.has_value() ? month.value() : (unsigned)ymd.month();
    unsigned target_day = day.has_value() ? day.value() : (unsigned)ymd.day();

    ymd = date::year_month_day(
        date::year{target_year}, date::month{target_month},date::day{date::day{target_day}});
    if (ymd.ok()) {
        auto ld = date::local_days(ymd);
        days_since_epoch_ = ld.time_since_epoch().count();
    } else {
        std::ostringstream oss;
        oss << ymd;
        THROW_CODE(InputError, "{}", oss.str());
    }
}

void Date::fromYearWeekDow(int year, unsigned week, unsigned dow) {
    iso_week::year_weeknum_weekday yww(iso_week::year{year},
                                       iso_week::weeknum{week},
                                       iso_week::weekday{date::weekday{dow}});

    if (yww.ok()) {
        auto ld = date::local_days(yww);
        days_since_epoch_ = ld.time_since_epoch().count();
    } else {
        std::ostringstream oss;
        oss << yww;
        THROW_CODE(InputError, "{}", oss.str());
    }
}

void Date::fromYearWeekDow(const Date& base_date, std::optional<int> year,
                           std::optional<unsigned> week,
                           std::optional<unsigned> dow) {
    iso_week::year_weeknum_weekday yww(
        date::local_days{date::days{base_date.GetStorage()}});

    int target_year = year.has_value() ? year.value() : (int)yww.year();
    unsigned target_week =
        week.has_value() ? week.value() : (unsigned)yww.weeknum();
    unsigned target_dow =
        dow.has_value() ? dow.value() : (unsigned)yww.weekday();

    yww = iso_week::year_weeknum_weekday(
        iso_week::year{target_year}, iso_week::weeknum{target_week},
        iso_week::weekday{date::weekday{target_dow}});
    if (yww.ok()) {
        date::local_days ld = date::local_days(yww);
        days_since_epoch_ = ld.time_since_epoch().count();
    } else {
        std::ostringstream oss;
        oss << yww;
        THROW_CODE(InputError, "{}", oss.str());
    }
}

void Date::fromYearQuarterDoq(const Date& base_date, std::optional<int> year,
                              std::optional<int> quarter, std::optional<int> doq) {
    date::year_month_day ymd = date::year_month_day{date::local_days(date::days(base_date.days_since_epoch_))};
    int target_year = year.has_value() ? year.value() : (int)ymd.year();
    if (!doq.has_value()) {
        unsigned target_month = quarter.has_value() ? (quarter.value() - 1) * 3 + ((unsigned)ymd.month() - 1) % 3 + 1 :
                                             (unsigned)ymd.month();
        ymd = date::year_month_day(date::year(target_year), date::month(target_month), ymd.day());
    } else {
        unsigned target_quarter = quarter.has_value() ? quarter.value() : ((unsigned)ymd.month() - 1) / 3 + 1;
        switch (target_quarter) {
            case 1: {
                ymd = date::year{target_year} / 1 / 1;
                break;
            }
            case 2: {
                ymd = date::year{target_year} / 4 / 1;
                break;
            }
            case 3: {
                ymd = date::year{target_year} / 7 / 1;
                break;
            }
            case 4: {
                ymd = date::year{target_year} / 10 / 1;
                break;
            }
            default:
                THROW_CODE(
                    InputError,
                    "Invalid value for QuarterOfYear (valid values 1 - 4): {}",
                    target_quarter);
        }
        auto days = (date::local_days)ymd;
        days += date::days(doq.value() - 1);
        ymd = date::year_month_day(days);
    }

    if (ymd.ok()) {
        date::local_days ld = (date::local_days)ymd;
        days_since_epoch_ = ld.time_since_epoch().count();
    } else {
        std::ostringstream oss;
        oss << ymd;
        THROW_CODE(InputError, "{}", oss.str());
    }
}

void Date::fromYearQuarterDoq(int year, int quarter, int doq) {
    date::year_month_day ymd;
    switch (quarter) {
        case 1: {
            ymd = date::year{year} / 1 / 1;
            break;
        }
        case 2: {
            ymd = date::year{year} / 4 / 1;
            break;
        }
        case 3: {
            ymd = date::year{year} / 7 / 1;
            break;
        }
        case 4: {
            ymd = date::year{year} / 10 / 1;
            break;
        }

        default:
            THROW_CODE(
                InputError,
                "Invalid value for QuarterOfYear (valid values 1 - 4): {}",
                quarter);
    }
    auto days = (date::local_days)ymd;
    days += date::days(doq - 1);
    ymd = date::year_month_day(days);

    if (ymd.ok()) {
        date::local_days ld = (date::local_days)ymd;
        days_since_epoch_ = ld.time_since_epoch().count();
    } else {
        std::ostringstream oss;
        oss << ymd;
        THROW_CODE(InputError, "{}", oss.str());
    }
}

void Date::fromYearDoy(const Date& base_date, std::optional<int> year, std::optional<int> doy) {
    date::year_month_day ymd = date::year_month_day{date::local_days(date::days(base_date.days_since_epoch_))};
    int target_year = year.has_value() ? year.value() : (int)ymd.year();
    if (doy.has_value()) {
        ymd = date::year_month_day{date::year{target_year}, date::month{1}, date::day{1}};
        auto days = (date::local_days)ymd;
        days += date::days(doy.value() - 1);
        ymd = date::year_month_day(days);
    } else {
        ymd = date::year_month_day{date::year{target_year}, ymd.month(), ymd.day()};
    }

    if (ymd.ok()) {
        date::local_days ld = (date::local_days)ymd;
        days_since_epoch_ = ld.time_since_epoch().count();
    } else {
        std::ostringstream oss;
        oss << ymd;
        THROW_CODE(InputError, "{}", oss.str());
    }
}

void Date::fromYearDoy(int year, int doy) {
    date::year_month_day ymd =
        date::year_month_day{date::year{year}, date::month{1}, date::day{1}};
    auto days = (date::local_days)ymd;
    days += date::days(doy - 1);
    ymd = date::year_month_day(days);

    if (ymd.ok()) {
        date::local_days ld = (date::local_days)ymd;
        days_since_epoch_ = ld.time_since_epoch().count();
    } else {
        std::ostringstream oss;
        oss << ymd;
        THROW_CODE(InputError, "{}", oss.str());
    }
}

void Date::fromTimeZone(std::string timezone) {
    date::zoned_time<std::chrono::system_clock::duration> current_time;
    std::string current_time_zone;
    try {
        if (timezone[0] == '+' || timezone[0] == '-') {
            // Handling timezone offset, e.g., "+01:00"
            auto now = std::chrono::system_clock::now();
            auto offset = date::make_time(
                std::chrono::hours(std::stoi(timezone.substr(1, 2))) +
                std::chrono::minutes(std::stoi(timezone.substr(4, 2))));
            if (timezone[0] == '-') {
                current_time = date::make_zoned(date::current_zone(),
                                                now - offset.to_duration());
            } else {
                current_time = date::make_zoned(date::current_zone(),
                                                now + offset.to_duration());
            }
        } else {
            // Handling named timezone, e.g., "America/New_York"
            if (timezone == "z" || timezone == "Z") {
                timezone = "UTC";
            }
            std::replace(timezone.begin(), timezone.end(), ' ', '_');
            current_time =
                date::make_zoned(timezone, std::chrono::system_clock::now());
        }
        days_since_epoch_ =
            std::chrono::duration_cast<date::days>(
                current_time.get_local_time().time_since_epoch())
                .count();
    } catch (const std::exception& e) {
        THROW_CODE(InputError, "Failed to parse timezone: {}", timezone);
    }
}

Date::Date() {
    auto t = make_zoned(date::current_zone(), std::chrono::system_clock::now());
    days_since_epoch_ = std::chrono::duration_cast<date::days>(
                            t.get_local_time().time_since_epoch())
                            .count();
}

Date::Date(const std::string& str) {
    int year = 0, doy = 1;
    unsigned month = 1, day = 1;
    unsigned week = 1, dow = 1;
    int quarter = 1, doq = 1;

    std::smatch match;
    if (!std::regex_match(str, match, DATE_REGEX)) {
        THROW_CODE(InputError, "Failed to parse {} into Date", str);
    }

    try {
        if (match[DATE_SHORT_YEAR].matched) {  // short format
            year = std::stoi(match[DATE_SHORT_YEAR].str());
            if (match[DATE_SHORT_MONTH].matched) {
                month = std::stoi(match[DATE_SHORT_MONTH].str());
                if (match[DATE_SHORT_DAY].matched) {
                    day = std::stoi(match[DATE_SHORT_DAY].str());
                }
                fromYearMonthDay(year, month, day);
            } else if (match[DATE_SHORT_WEEK].matched) {
                week = std::stoi(match[DATE_SHORT_WEEK].str());
                if (match[DATE_SHORT_DOW].matched) {
                    dow = std::stoi(match[DATE_SHORT_DOW].str());
                }
                fromYearWeekDow(year, week, dow);
            } else if (match[DATE_SHORT_QUARTER].matched) {
                quarter = std::stoi(match[DATE_SHORT_QUARTER].str());
                if (match[DATE_SHORT_DOQ].matched) {
                    doq = std::stoi(match[DATE_SHORT_DOQ].str());
                }
                fromYearQuarterDoq(year, quarter, doq);
            } else if (match[DATE_SHORT_DOY].matched) {
                int doy = std::stoi(match[DATE_SHORT_DOY].str());
                fromYearDoy(year, doy);
            } else {
                fromYearMonthDay(year, month, day);
            }
        } else if (match[DATE_LONG_YEAR].matched) {  // long format
            year = std::stoi(match[DATE_LONG_YEAR].str());
            if (match[DATE_LONG_MONTH].matched) {
                month = std::stoi(match[DATE_LONG_MONTH].str());
                if (match[DATE_LONG_DAY].matched) {
                    day = std::stoi(match[DATE_LONG_DAY].str());
                }
                fromYearMonthDay(year, month, day);
            } else if (match[DATE_LONG_WEEK].matched) {
                week = std::stoi(match[DATE_LONG_WEEK].str());
                if (match[DATE_LONG_DOW].matched) {
                    dow = std::stoi(match[DATE_LONG_DOW].str());
                }
                fromYearWeekDow(year, week, dow);
            } else if (match[DATE_LONG_QUARTER].matched) {
                quarter = std::stoi(match[DATE_LONG_QUARTER].str());
                if (match[DATE_LONG_DOQ].matched) {
                    doq = std::stoi(match[DATE_LONG_DOQ].str());
                }
                fromYearQuarterDoq(year, quarter, doq);
            } else if (match[DATE_LONG_DOY].matched) {
                day = std::stoi(match[DATE_LONG_DOY].str());
                fromYearDoy(year, day);
            } else {
                fromYearMonthDay(year, month, day);
            }
        }
    } catch (const std::exception& e) {
        THROW_CODE(InputError, "Failed to parse {} into Date, exception: {}",
                   str, e.what());
    }
}

Date::Date(const Value& params) {
    if (params.IsDate()) {
        days_since_epoch_ = params.AsDate().GetStorage();
        return;
    }
    if (params.IsDateTime()) {
        days_since_epoch_ = std::get<0>(params.AsDateTime().GetStorage()) / (NANOS_PER_SECOND * SECONDS_PER_DAY);
        return;
    }
    if (params.IsLocalDateTime()) {
        days_since_epoch_ = params.AsLocalDateTime().GetStorage() / (NANOS_PER_SECOND * SECONDS_PER_DAY);
        return;
    }

    std::optional<int> year;
    std::optional<unsigned> week;
    std::optional<unsigned> dow;

    std::optional<int> doy;
    std::optional<unsigned> month, day;
    std::optional<int> quarter, doq;
    std::string timezone;

    std::optional<Date> base_date = std::nullopt;
    std::unordered_map<std::string, Value> params_map;
    for (const auto& kv : params.AsMap()) {
        auto s = kv.first;
        std::transform(s.begin(), s.end(), s.begin(), ::tolower);
        if (std::find(validDateFields.begin(), validDateFields.end(), s) ==
            validDateFields.end()) {
            THROW_CODE(InputError, "No such field: {}", kv.first);
        }
        if (!params_map.emplace(s, kv.second).second) {
            THROW_CODE(InputError, "Cannot re-assign {}", s);
        }
    }
    validateDateParams(params_map);

    DateType dt = DateType::CALENDER_DATE;
    try {
        if (params_map.count(DATE_DATE)) {
            if (params_map.at(DATE_DATE).IsDate()) {
                base_date = params_map.at(DATE_DATE).AsDate();
            } else if (params_map.at(DATE_DATE).IsDateTime()) {
                base_date = Date(std::get<0>(params_map.at(DATE_DATE).AsDateTime().GetStorage()) / (NANOS_PER_SECOND * SECONDS_PER_DAY));
            } else if (params_map.at(DATE_DATE).IsLocalDateTime()) {
                base_date = Date(params_map.at(DATE_DATE).AsLocalDateTime().GetStorage() / (NANOS_PER_SECOND * SECONDS_PER_DAY));
            } else {
                THROW_CODE(InvalidParameter, "Cannot get the date of: {}", params_map.at(DATE_DATE).ToString());
            }
        }
        if (params_map.count(std::string(DATE_YEAR))) {
            year = (int)params_map.at(DATE_YEAR).AsInteger();
        }
        if (params_map.count(DATE_MONTH)) {
            month = (unsigned)params_map.at(DATE_MONTH).AsInteger();
        }
        if (params_map.count(DATE_DAY)) {
            day = (unsigned)params_map.at(DATE_DAY).AsInteger();
        }
        if (params_map.count(DATE_WEEK)) {
            week = (unsigned)params_map.at(DATE_WEEK).AsInteger();
            dt = DateType::WEEK_DATE;
        }
        if (params_map.count(DATE_DOW)) {
            dow = (unsigned)params_map.at(DATE_DOW).AsInteger();
            dt = DateType::WEEK_DATE;
        }
        if (params_map.count(DATE_QUARTER)) {
            quarter = (int)params_map.at(DATE_QUARTER).AsInteger();
            dt = DateType::QUATER_DATE;
        }
        if (params_map.count(DATE_DOQ)) {
            doq = (int)params_map.at(DATE_DOQ).AsInteger();
            dt = DateType::QUATER_DATE;
        }
        if (params_map.count(DATE_ORDINAL)) {
            doy = (int)params_map.at(DATE_ORDINAL).AsInteger();
            dt = DateType::ORDINAL_DATE;
        }
        if (params_map.count(DATE_TIMEZONE)) {
            timezone = params_map.at(DATE_TIMEZONE).AsString();
            dt = DateType::TIMEZONE_DATE;
        }
    } catch (const std::exception& e) {
        THROW_CODE(InputError, "Failed to parse {} into Date, exception: {}",
                   params.ToString(), e.what());
    }

    switch (dt) {
        case DateType::CALENDER_DATE:
            if (base_date.has_value()) {
                fromYearMonthDay(base_date.value(), year, month, day);
            } else {
                fromYearMonthDay(year.value(), month.value_or(1), day.value_or(1));
            }
            break;
        case DateType::WEEK_DATE: {
            if (base_date.has_value()) {
                fromYearWeekDow(base_date.value(), year, week, dow);
            } else {
                fromYearWeekDow(year.value(), week.value(), dow.value_or(1));
            }
            break;
        }
        case DateType::QUATER_DATE:
            if (base_date.has_value()) {
                fromYearQuarterDoq(base_date.value(), year, quarter, doq);
            } else {
                fromYearQuarterDoq(year.value(), quarter.value_or(1), doq.value_or(1));
            }
            break;
        case DateType::ORDINAL_DATE:
            if (base_date.has_value()) {
                fromYearDoy(base_date.value(), year, doy);
            } else {
                fromYearDoy(year.value(), doy.value_or(1));
            }
            break;
        case DateType::TIMEZONE_DATE:
            fromTimeZone(timezone);
            break;
        default:
            THROW_CODE(InputError, "Failed to parse {} into Date",
                       params.ToString());
    }
}

std::string Date::ToString() const {
    date::local_days tp((date::days(days_since_epoch_)));
    return date::format("%Y-%m-%d", tp);
}

Value Date::GetUnit(std::string unit) const {
    std::transform(unit.begin(), unit.end(), unit.begin(), ::tolower);
    date::year_month_day ymd((date::local_days((date::days(days_since_epoch_)))));
    iso_week::year_weeknum_weekday yww(date::local_days{date::days{days_since_epoch_}});
    if (unit == "year") {
        return Value::Integer(int(ymd.year()));
    } else if (unit == "month") {
        return Value::Integer(unsigned(ymd.month()));
    } else if (unit == "day") {
        return Value::Integer(unsigned(ymd.day()));
    } else if (unit == "weekyear") {
        return Value::Integer(int(yww.year()));
    } else if (unit == "week") {
        return Value::Integer(unsigned(yww.weeknum()));
    } else if (unit == "weekday") {
        return Value::Integer(unsigned(yww.weekday()));
    } else if (unit == "ordinalday") {
        return Value::Integer(days_since_epoch_ - date::local_days(date::year_month_day{ymd.year(),
                    date::month(1), date::day(1)}).time_since_epoch().count() + 1);
    } else if (unit == "quarter") {
        return Value::Integer((unsigned(ymd.month()) - 1) / 3 + 1);
    } else if (unit == "dayofquarter") {
        return Value::Integer(days_since_epoch_ - date::local_days(date::year_month_day{ymd.year(),
                       date::month(((unsigned(ymd.month()) - 1) / 3) * 3 + 1), date::day(1)}).time_since_epoch().count() + 1);
    } else {
        THROW_CODE(InvalidParameter, "No such field: {}", unit);
    }
}

bool Date::operator<(const Date& rhs) const noexcept {
    return days_since_epoch_ < rhs.days_since_epoch_;
}

bool Date::operator<=(const Date& rhs) const noexcept {
    return days_since_epoch_ <= rhs.days_since_epoch_;
}

bool Date::operator>(const Date& rhs) const noexcept {
    return days_since_epoch_ > rhs.days_since_epoch_;
}

bool Date::operator>=(const Date& rhs) const noexcept {
    return days_since_epoch_ >= rhs.days_since_epoch_;
}

bool Date::operator==(const Date& rhs) const noexcept {
    return days_since_epoch_ == rhs.days_since_epoch_;
}

bool Date::operator!=(const Date& rhs) const noexcept {
    return days_since_epoch_ != rhs.days_since_epoch_;
}

Date Date::operator-(const Duration& duration) const {
    date::year_month_day ymd((date::local_days((date::days(days_since_epoch_)))));
    ymd -= date::months(duration.months);
    return Date(date::local_days(ymd).time_since_epoch().count() - duration.days -
                (duration.seconds * NANOS_PER_SECOND + duration.nanos) / (NANOS_PER_SECOND * SECONDS_PER_DAY));
}

Date Date::operator+(const Duration& duration) const {
    date::year_month_day ymd((date::local_days((date::days(days_since_epoch_)))));
    ymd += date::months(duration.months);
    return Date(date::local_days(ymd).time_since_epoch().count() + duration.days +
                (duration.seconds * NANOS_PER_SECOND + duration.nanos) / (NANOS_PER_SECOND * SECONDS_PER_DAY));
}

}  // namespace common