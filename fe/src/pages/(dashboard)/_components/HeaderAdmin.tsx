import { setCollapsed } from '@/redux/features/antSlice';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, theme } from 'antd';
import { Header } from 'antd/es/layout/layout'
import { useDispatch, useSelector } from 'react-redux';

const HeaderAdmin = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const collapsed = useSelector((state:any)=>state.ant.collapsed)
    const dispath = useDispatch()
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => dispath(setCollapsed(!collapsed))}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
  )
}

export default HeaderAdmin