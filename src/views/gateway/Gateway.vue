<template>
  <div class="gateway">
    <a-row :gutter="10" class="action-row">
      <a-col>
        <a-input-search placeholder="编号" style="width: 180px;" />
      </a-col>
      <a-col>
        <a-input-search placeholder="名称" style="width: 180px;" />
      </a-col>
      <a-col>
        <a-button type="primary">查询</a-button>
      </a-col>
      <a-col>
        <a-button type="default">导出</a-button>
      </a-col>
      <a-col>
        <a-button type="primary">新增</a-button>
      </a-col>
    </a-row>
    <a-table
      :columns="columns"
      :dataSource="data"
      bordered
      :pagination="pagination"
      scroll="{ x: '100%' }"
    >
      <template #status="{ record }">
        <a-button
          type="text"
          :style="{ color: record.status === '在线' ? 'green' : 'red' }"
          @click="toggleStatus(record)"
        >
          {{ record.status }}
        </a-button>
      </template>
      <template #action="{ record }">
        <a-button type="link" @click="onEdit(record)">修改</a-button>
        <a-button type="link" danger @click="onDelete(record)">删除</a-button>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { message, Modal } from 'ant-design-vue';

const columns = [
  { title: '创建时间', dataIndex: 'createTime', key: 'createTime', width: 150 },
  { title: '设备名称', dataIndex: 'deviceName', key: 'deviceName', width: 150 },
  { title: '编号', dataIndex: 'deviceCode', key: 'deviceCode', width: 100 },
  { title: '是否在线', dataIndex: 'status', key: 'status', width: 150, slots: { customRender: 'status' } },
  { title: '当前场景', dataIndex: 'currentScene', key: 'currentScene', width: 120 },
  { title: '最后在线时间', dataIndex: 'lastOnline', key: 'lastOnline', width: 150 },
  { title: '教室灯预设', dataIndex: 'classroomLightPreset', key: 'classroomLightPreset', width: 220 },
  { title: '黑板灯预设', dataIndex: 'blackboardLightPreset', key: 'blackboardLightPreset', width: 220 },
  { title: '养殖灯预设', dataIndex: 'breedingLightPreset', key: 'breedingLightPreset', width: 220 },
  { title: '随路名称', dataIndex: 'roadName', key: 'roadName', width: 150 },
  { title: '操作', key: 'action', slots: { customRender: 'action' }, width: 250 },
];

columns.forEach(column => {
  column.customCell = () => {
    return { style: { textAlign: 'center', whiteSpace: 'nowrap' } };
  };
});

const data = ref([
  {
    key: '1',
    createTime: '2024-07-17 10:52:14',
    deviceName: '黄工院8号网关',
    deviceCode: 'DCD03D540B3',
    status: '在线',
    currentScene: '放学模式',
    lastOnline: '2024-07-30 17:32:58',
    classroomLightPreset: 9,
    blackboardLightPreset: 0,
    breedingLightPreset: 0,
    roadName: 'FA163EF',
  },
  {
    key: '2',
    createTime: '2024-07-02 20:27:39',
    deviceName: '松阳教室2网关',
    deviceCode: 'DCD03D540B5',
    status: '离线',
    currentScene: '放学模式',
    lastOnline: '2024-07-03 10:54:07',
    classroomLightPreset: 1,
    blackboardLightPreset: 0,
    breedingLightPreset: 0,
    roadName: 'FA163EF',
  },
  {
    key: '3',
    createTime: '2024-07-02 19:32:00',
    deviceName: '松阳教室1网关',
    deviceCode: 'DCD03D5405C',
    status: '离线',
    currentScene: '上课模式',
    lastOnline: '2024-07-02 19:34:08',
    classroomLightPreset: 0,
    blackboardLightPreset: 0,
    breedingLightPreset: 0,
    roadName: 'FA163EF',
  },
  {
    key: '4',
    createTime: '2024-04-30 17:16:40',
    deviceName: '北仓12+3网关',
    deviceCode: 'BL12+3',
    status: '在线',
    currentScene: '上课模式',
    lastOnline: '2024-05-07 16:59:21',
    classroomLightPreset: 3,
    blackboardLightPreset: 0,
    breedingLightPreset: 0,
    roadName: 'FA163EF',
  },
  {
    key: '5',
    createTime: '2024-04-30 17:08:29',
    deviceName: '北仓投标样品1+2网关',
    deviceCode: 'BL1+1',
    status: '离线',
    currentScene: '上课模式',
    lastOnline: '2024-05-14 13:29:35',
    classroomLightPreset: 2,
    blackboardLightPreset: 1,
    breedingLightPreset: 0,
    roadName: 'FA163EF',
  },
  {
    key: '6',
    createTime: '2024-04-29 19:22:13',
    deviceName: 'BL1+1网关',
    deviceCode: 'BL1+1',
    status: '在线',
    currentScene: '上课模式',
    lastOnline: '2024-04-29 20:11:43',
    classroomLightPreset: 1,
    blackboardLightPreset: 1,
    breedingLightPreset: 0,
    roadName: 'FA163EF',
  },
  {
    key: '7',
    createTime: '2024-03-13 09:06:15',
    deviceName: '4F2A网关',
    deviceCode: '4F2A',
    status: '离线',
    currentScene: '放学模式',
    lastOnline: '2024-03-13 13:51:30',
    classroomLightPreset: 0,
    blackboardLightPreset: 0,
    breedingLightPreset: 0,
    roadName: 'FA163EF',
  },
  {
    key: '8',
    createTime: '2024-03-04 09:39:15',
    deviceName: '网关',
    deviceCode: 'DCD30001163',
    status: '在线',
    currentScene: '放学模式',
    lastOnline: '2024-05-15 11:09:06',
    classroomLightPreset: 0,
    blackboardLightPreset: 0,
    breedingLightPreset: 0,
    roadName: 'FA163EF',
  },
  {
    key: '9',
    createTime: '2024-02-27 17:54:05',
    deviceName: '4F0A网关',
    deviceCode: '4F0A',
    status: '离线',
    currentScene: '上课模式',
    lastOnline: '2024-03-15 09:23:34',
    classroomLightPreset: 12,
    blackboardLightPreset: 3,
    breedingLightPreset: 0,
    roadName: 'FA163EF',
  },
  {
    key: '10',
    createTime: '2024-02-27 17:18:46',
    deviceName: '4F1A网关',
    deviceCode: '4F1A',
    status: '在线',
    currentScene: '上课模式',
    lastOnline: '2024-03-08 16:54:58',
    classroomLightPreset: 12,
    blackboardLightPreset: 3,
    breedingLightPreset: 0,
    roadName: 'FA163EF',
  },
]);

const pagination = ref({
  current: 1,
  pageSize: 10,
  showTotal: (total) => `共 ${total} 条`,
  showQuickJumper: true,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '30', '40'],
  locale: {
    items_per_page: '条/页',
    jump_to: '前往',
    jump_to_confirm: '确认',
    page: '页',
  },
});

const toggleStatus = (record) => {
  record.status = record.status === '在线' ? '离线' : '在线';
  message.success(`设备状态已更改为: ${record.status}`);
};

const onEdit = (record) => {
  message.info(`编辑设备: ${record.deviceName}`);
  // 在这里可以添加打开编辑对话框或跳转到编辑页面的逻辑
};

const onDelete = (record) => {
  Modal.confirm({
    title: '确认删除',
    content: `确定要删除设备 ${record.deviceName} 吗？`,
    onOk() {
      data.value = data.value.filter(item => item.key !== record.key);
      message.success('删除成功');
    },
  });
};
</script>

<style scoped>
.gateway {
  padding: 14px;
  background-color: #f0f2f5;
  flex: 1;
  overflow-y: auto;
}

.action-row {
  margin-bottom: 16px; /* 为操作栏和表格之间添加间距 */
}
</style>
