import React from 'react';
import { View } from 'react-native';

export default function Ex07() {
  return (
    // View หลัก: ต้องใช้ flex: 1 เพื่อให้กินพื้นที่เต็มจอ
    <View style={{ 
        flex: 1, 
        // 1. จัดคอนเทนเนอร์ในแนวตั้ง (แกนหลัก) ให้อยู่ด้านล่าง
        justifyContent: 'flex-end', 
        // 2. จัดคอนเทนเนอร์ในแนวนอน (แกนรอง) ให้อยู่ด้านซ้าย (ค่าเริ่มต้นคือ flex-start)
        alignItems: 'flex-start' 
    }}>
      
      {/* View ที่ใช้จัดเรียงกล่องสี (คอนเทนเนอร์ปิด) */}
      <View style={{ 
        // 3. จัดเรียง Item ให้อยู่ในแนวนอน (Horizontal Stack)
        flexDirection: 'row' 
      }}> 
        
        {/* Item 1: สีเขียวอมฟ้า */}
        <View style={{ backgroundColor : '#50E3C2' , width : 100 ,height:100 }}></View> 
        
        {/* Item 2: สีน้ำเงิน */}
        <View style={{ backgroundColor : '#4A90E2' , width : 100 ,height:100 }}></View>
        
        {/* Item 3: สีม่วง */}
        <View style={{ backgroundColor : '#9013FE' , width : 100 ,height:100 }}></View> 
        
      </View>
    </View>
  );
}