import isBetween from "dayjs/plugin/isBetween";
import dayjs from "dayjs";

dayjs.extend(isBetween);

const FROM_TIME = "6";
const TO_TIME = "18";

const nextDate = (keys, date) => {
  const _key = keys.find((key) => dayjs(key).isAfter(dayjs(date)));
  if (_key) return dayjs(_key).format("YYYY-MM-DD");
  return null;
};

export const getDates = (slots) => {
  const _data = [];
  // const _days = [];
  // let _nextDate = null;

  const _keys = Object.keys(slots);

  // const _day0 = _keys[0]; // dayjs().format("YYYY-MM-DD");
  // const _day1 = _keys[1]; // dayjs().add(1, "d").format("YYYY-MM-DD");
  // const _day2 = _keys[2]; // dayjs().add(2, "d").format("YYYY-MM-DD");
  // const _day3 = _keys[3]; // dayjs().add(3, "d").format("YYYY-MM-DD");

  // let count = 0;

  // if (slots[_day0]) {
  //   slots[_day0].map((e) => {
  //     if (e.slots.count !== 0) {
  //       count++;
  //     }
  //   });
  // }
  // if (slots[_day1]) {
  //   slots[_day1].map((e) => {
  //     if (e.slots.count !== 0) {
  //       count++;
  //     }
  //   });
  // }
  // if (slots[_day2]) {
  // 	slots[_day2].map(e => {
  // 		if (e.slots.count !== 0) {
  // 			count1 = count1 + e.slots.count;
  // 		}
  // 	});
  // }
  // if (slots[_day3]) {
  // 	slots[_day3].map(e => {
  // 		if (e.slots.count !== 0) {
  // 			count1 = count1 + e.slots.count;
  // 		}
  // 	});
  // }
  // if (count1 === 0) {
  // 	window.localStorage.setItem("show_slot_error", true);
  // }
  // const _fromTime = dayjs().hour(FROM_TIME).minute(0).second(0);
  // const _toTime = dayjs().hour(TO_TIME).minute(0).second(0);

  // const _isBetween = dayjs().isBetween(_fromTime, _toTime);
  // const _isBefore = dayjs().isBefore(_fromTime);
  // const _isAfter = dayjs().isAfter(_toTime);

  // if (_isBetween) {
  //   if (slots[_day0]) {
  //     let count = 0;
  //     slots[_day0].map((e) => {
  //       if (e.slots.count !== 0) {
  //         count++;
  //       }
  //     });
  //     if (count !== 0) {
  //       _days.push(_day0);
  //     }
  //   }

  //   if (slots[_day1]) {
  //     let count = 0;
  //     slots[_day1].map((e) => {
  //       if (e.slots.count !== 0) {
  //         count++;
  //       }
  //     });
  //     if (count !== 0) {
  //       _days.push(_day1);
  //     }
  //   }

  //   if (slots[_day2]) {
  //     let count = 0;
  //     slots[_day2].map((e) => {
  //       if (e.slots.count !== 0) {
  //         count++;
  //       }
  //     });
  //     if (count !== 0) {
  //       _days.push(_day2);
  //     }
  //   }

  //   if (slots[_day3]) {
  //     let count = 0;
  //     slots[_day3].map((e) => {
  //       if (e.slots.count !== 0) {
  //         count++;
  //       }
  //     });
  //     if (count !== 0) {
  //       _days.push(_day3);
  //     }
  //   }

  //   // if (count < 5) {
  //   // if (slots[_day2]) _days.push(_day2);
  //   // if (slots[_day3]) _days.push(_day3);
  //   // }

  //   const _lenghtOfDays = _days.length;
  //   if (_lenghtOfDays === 0) {
  //     _nextDate = nextDate(_keys, _day0);
  //     if (_nextDate) _days.push(_nextDate);

  //     _nextDate = nextDate(_keys, _days[0]);
  //     if (_nextDate) _days.push(_nextDate);
  //   } else if (_lenghtOfDays === 1) {
  //     _nextDate = nextDate(_keys, _days[0]);
  //     if (_nextDate) _days.push(_nextDate);
  //   }
  // } else if (_isBefore) {
  //   if (slots[_day0]) _days.push(_day0);
  //   else {
  //     _nextDate = nextDate(_keys, _day0);
  //     if (_nextDate) _days.push(_nextDate);
  //   }
  // } else if (_isAfter) {
  //   if (slots[_day1]) _days.push(_day1);
  //   else {
  //     _nextDate = nextDate(_keys, _day1);
  //     if (_nextDate) _days.push(_nextDate);
  //   }
  //   // if (count < 5) {
  //     if (slots[_day2]) _days.push(_day2);
  //     else {
  //       _nextDate = nextDate(_keys, _day2);
  //       if (_nextDate) _days.push(_nextDate);
  //     }
  //     if (slots[_day3]) _days.push(_day3);
  //     else {
  //       _nextDate = nextDate(_keys, _day3);
  //       if (_nextDate) _days.push(_nextDate);
  //     }
  //   // }
  // }

  _keys.forEach((key) => {
    let _day = "";

    const _date = dayjs(key);
    const _now = dayjs().format("YYYY-MM-DD");
    const _diff = _date.diff(_now, "d");

    if (_diff === 0) _day = "Today";
    else if (_diff === 1) _day = "Tomorrow";
    else _day = _date.format("dddd");

    _data.push({
      date: _date,
      day: _day,
    });
  });

  return _data;
};
