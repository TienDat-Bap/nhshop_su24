import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const SideBarAdmin = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const collapsed = useSelector((state:any)=>state.ant.collapsed)
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="demo-logo-vertical" />
    <Menu
      theme="dark"
      mode="inline"
      items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: <NavLink to={'/admin'}>Thống kê</NavLink>,
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'Sản phẩm',
          children:[
            {
              key:2.1,
              label: <NavLink to={'/admin/products'}>Danh sách</NavLink>
            }
          ]
        },
        {
          key: '3',
          icon: <UploadOutlined />,
          label: 'nav 3',
        },
      ]}
    />
  </Sider>
  )
}

export default SideBarAdmin