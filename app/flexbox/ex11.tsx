import React from 'react';
import { View } from 'react-native';

export default function Ex11() {
  // สีที่กำหนด: 4A90E2 (น้ำเงิน) และ 50E3C2 (เขียวอมฟ้า)
  const colourTop = '#4A90E2'; 
  const colourBottom = '#50E3C2';
  
  return (
    // View หลัก: ต้องใช้ flex: 1 เพื่อให้กินพื้นที่เต็มหน้าจอ
    <View style={{ 
        flex: 1, 
        // **กุญแจสำคัญ**: กำหนดให้เรียงในแนวตั้ง
        flexDirection: 'column' 
    }}>
      
      {/* View ส่วนบน (สีน้ำเงิน) */}
      <View style={{ 
          // **การแบ่งพื้นที่**: flex: 1 หมายถึงส่วนนี้ได้ 1 ส่วนจาก 2 ส่วน (1+1)
          flex: 1, 
          backgroundColor: colourTop,
      }} />
      
      {/* View ส่วนล่าง (สีเขียวอมฟ้า) */}
      <View style={{ 
          // **การแบ่งพื้นที่**: flex: 1 ทำให้ส่วนนี้มีขนาดเท่ากับส่วนบน
          flex: 1, 
          backgroundColor: colourBottom,
      }} />
      
    </View>
  );
}