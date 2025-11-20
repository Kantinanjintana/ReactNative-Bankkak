import React from 'react';
import { View } from 'react-native';

export default function Ex04() {
  return (
    // View หลัก: ให้กินพื้นที่เต็มจอ (flex: 1) และ **เอา padding ออก**
    <View style={{ flex: 1 }}>
      
      {/* View ที่ใช้จัดเรียงกล่องสี */}
      <View style={{ 
        // กุญแจสำคัญ: จัดเรียงในแนวตั้ง
        flexDirection: 'column' 
      }}>
        
        {/* Item 1: สีเขียวอมฟ้า */}
        <View style={{ backgroundColor: '#50E3C2', width: 100, height: 100 }}></View>
        
        {/* Item 2: สีน้ำเงิน */}
        <View style={{ backgroundColor: '#4A90E2', width: 100, height: 100 }}></View>
        
        {/* Item 3: สีม่วง */}
        <View style={{ backgroundColor: '#9013FE', width: 100, height: 100 }}></View>
        
      </View>
    </View>
  );
}