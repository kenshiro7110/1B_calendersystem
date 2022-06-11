/*import * as Lib from "./MainJob.js;           //シフト設定処理部
/*****************************************************************
***function name     :Week_DataSave
***Designer          :吹谷　優太
***Date              :
***function          :現在カレンダーに反映しているシフト時間をシフト設定画面に反映する
 *******************************************************************/

function Week_DataInit(){
 //   var weekshift = AskJobs("WeekShift_UI");    //週間シフト情報をシフト設定処理部に問い合わせ

    document.getElementById("weekshift_sun_s").value = "12:00"; //weekshift[0];  //日曜日の深夜給時間帯の始まり
    document.getElementById("weekshift_sun_f").value = "12:00"; //weekshift[1];  //日曜日の深夜給時間帯の終わり
    document.getElementById("weekshift_mon_s").value = "12:00"; //weekshift[2];  //月曜日の深夜給時間帯の始まり
    document.getElementById("weekshift_mon_f").value = "12:00"; //weekshift[3];  //月曜日の深夜給時間帯の終わり
    document.getElementById("weekshift_tue_s").value = "12:00"; //weekshift[4];  //火曜日の深夜給時間帯の始まり
    document.getElementById("weekshift_tue_f").value = "12:00"; //weekshift[5];  //火曜日の深夜給時間帯の終わり
    document.getElementById("weekshift_wed_s").value = "12:00"; //weekshift[6];  //水曜日の深夜給時間帯の始まり
    document.getElementById("weekshift_wed_f").value = "12:00"; //weekshift[7];  //水曜日の深夜給時間帯の終わり
    document.getElementById("weekshift_thu_s").value = "12:00"; //weekshift[8];  //木曜日の深夜給時間帯の始まり
    document.getElementById("weekshift_thu_f").value = "12:00"; //weekshift[9];  //木曜日の深夜給時間帯の終わり
    document.getElementById("weekshift_fri_s").value = "12:00"; //weekshift[10];  //金曜日の深夜給時間帯の始まり
    document.getElementById("weekshift_fri_f").value = "12:00"; //weekshift[11];  //金曜日の深夜給時間帯の始まり
    document.getElementById("weekshift_sut_s").value = "12:00"; //weekshift[12];  //土曜日の深夜給時間帯の終わり
    document.getElementById("weekshift_sut_f").value = "12:00"; //weekshift[13];  //土曜日の深夜給時間帯の終わり
}
window.onload = Week_DataInit;
     
/*******************************************
***function name     :Week_DataSave
***Designer          :吹谷　優太
***Date              :
***function          :シフト設定処理部に週別シフト情報を送る
 ********************************************/

function Week_DataSave(){
    var weekshift = [];
 
    weekshift.push = document.getElementById("weekshift_sun_s").value;
    weekshift.push = document.getElementById("weekshift_sun_f").value;
    weekshift.push = document.getElementById("weekshift_mon_s").value;
    weekshift.push = document.getElementById("weekshift_mon_f").value;
    weekshift.push = document.getElementById("weekshift_tue_s").value;
    weekshift.push = document.getElementById("weekshift_tue_f").value;
    weekshift.push = document.getElementById("weekshift_wed_s").value;
    weekshift.push = document.getElementById("weekshift_wed_f").value;
    weekshift.push = document.getElementById("weekshift_thu_s").value; 
    weekshift.push = document.getElementById("weekshift_thu_f").value;
    weekshift.push = document.getElementById("weekshift_fri_s").value;
    weekshift.push = document.getElementById("weekshift_fri_f").value;
    weekshift.push = document.getElementById("weekshift_sut_s").value;
    weekshift.push = document.getElementById("weekshift_sut_f").value;
 
    UpdateJobs(weekshift, "WeekShift_UI");
}
 