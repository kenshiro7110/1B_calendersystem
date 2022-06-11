import * as ask from "./AskShiftData.js"       //シフト設定処理部
import * as update from "./UpdateShiftData.js"    //シフト設定処理部

/*****************************************************************
***function name     :AskJobs
***Designer          :吹谷　優太
***Date              :
***function          :シフト情報をデータ管理部に問い合わせる
 *******************************************************************/

export function AskJobs(ProcessName){
  if (ProcessName == "Shift_UI") {
        var Shift = [];
        Shift.push(ask.CopyJobName());
        Shift.push(ask.CopyHourWages());
        Shift.push(ask.CopyTrasCosts());
        Shift.push(ask.CopyNightWages());
        Shift.push(ask.CopyOvertime());
        var NightWages_time = ask.CopyNightWagesRange();
        Shift.push(NightWages_time[0]);
        Shift.push(NightWages_time[1]);
        return Shift;
    } else if (ProcessName == "WeekShift_UI") {
        return CopyJobtime("WeekShift");
    } else if (ProcessName == "MonthShift_UI") {
        return CopyJobtime("MonthShift");
    }
}

/*******************************************
***function name     :UpdateJobs
***Designer          :吹谷　優太
***Date              :
***function          :シフト情報をに週別シフトのデータを送る
********************************************/
 
export function UpdateJobs(shiftdata, ProcessName){
    if (ProcessName == "Shift_UI") {
        update.SendJobName(shiftdata[0]);
        update.SendHourWage(shiftdata[1]);
        update.SendTrasCosts(shiftdata[2]);
        update.SendNightWages(shiftdata[3]);
        update.SendOvertime(shiftdata[4]);
        var NightWages_time = [];
        Shift.push(shiftdata[5]);
        Shift.push(shiftdata[6]);
        update.SendNightWagesRange(NightWages_time);
    } else if (ProcessName == "WeekShift_UI") {
        update.SendJobtime("WeekShift", shiftdata);
    } else if (ProcessName == "MonthShift_UI") {
        update.SendJobtime("MonthShift", shiftdata);
    }
}
