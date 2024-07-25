import React, { useState, useEffect } from 'react';
import { Badge, Popover, List, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const { Text } = Typography;

const NotificationBell = ({ notifications }) => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(notifications.filter(n => !n.read).length);
  }, [notifications]);

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
    if (newVisible) {
      notifications.forEach(n => n.read = true);
      setCount(0);
    }
  };

  const content = (
    <List
      itemLayout="horizontal"
      dataSource={notifications}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<Text strong>{item.title}</Text>}
            description={item.content}
          />
        </List.Item>
      )}
    />
  );

  return (
    <Popover
      content={content}
      title="Notifications"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Badge count={count}>
        <BellOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
      </Badge>
    </Popover>
  );
};

export default NotificationBell;