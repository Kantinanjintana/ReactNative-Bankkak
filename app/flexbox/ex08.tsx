import React from 'react';
import { View } from 'react-native';

export default function Ex08() {
  return (
    // View หลัก: flex: 1 เพื่อกินพื้นที่เต็มจอ
    <View style={{ 
        flex: 1, 
        // จัดให้อยู่ตรงกลางในแนวตั้ง
        justifyContent: 'center', 
        // ลบ alignItems: 'center' ออก หรือกำหนดเป็น 'flex-start' (ค่าเริ่มต้น)
        // เพื่อให้ View ลูกสามารถขยายความกว้างได้เต็มที่
    }}>
      
      {/* View ที่ใช้จัดเรียงกล่องสี (คอนเทนเนอร์ปิด) */}
      <View style={{ 
        flexDirection: 'row',
        
        // 1. **การแก้ไขที่สำคัญ**: กำหนดความกว้างเป็น 100% เพื่อให้ติดขอบซ้าย/ขวาของหน้าจอ
        width: '100%', 
        height: 100, 
        
        // 2. **กุญแจสำคัญ**: สร้างช่องว่างระหว่าง Item และดัน Item แรก/สุดท้ายไปติดขอบ
        justifyContent: 'space-between', 
      }}> 
        
        {/* Item 1: สีเขียวอมฟ้า (จะติดขอบซ้าย) */}
        <View style={{ backgroundColor : '#50E3C2' , width : 100 ,height:100 }}></View> 
        
        {/* Item 2: สีน้ำเงิน (จะอยู่ตรงกลาง) */}
        <View style={{ backgroundColor : '#4A90E2' , width : 100 ,height:100 }}></View>
        
        {/* Item 3: สีม่วง (จะติดขอบขวา) */}
        <View style={{ backgroundColor : '#9013FE' , width : 100 ,height:100 }}></View>
        
      </View>
    </View>
  );
}