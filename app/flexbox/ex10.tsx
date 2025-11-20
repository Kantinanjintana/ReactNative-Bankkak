import React from 'react';
import { View } from 'react-native';

export default function Ex10() {
  // สีที่กำหนดคือ: "4A90E2" (สีน้ำเงิน)
  const colour = '#4A90E2'; 
  
  return (
    // View เดียวที่กินพื้นที่เต็มหน้าจอ
    <View style={{ 
        // **กุญแจสำคัญ**: flex: 1 ทำให้ View ขยายเต็มพื้นที่ของ View แม่ (ในที่นี้คือเต็มหน้าจอ)
        flex: 1, 
        // กำหนดสีพื้นหลังตามที่โจทย์ระบุ
        backgroundColor: colour,
        // เนื่องจากเป็น View เดียวและกินพื้นที่ทั้งหมด, flexDirection จึงไม่มีผลกระทบ
    }}>
      {/* ไม่มีองค์ประกอบอื่นอยู่ข้างใน */}
    </View>
  );
}