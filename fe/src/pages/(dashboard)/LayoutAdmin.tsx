
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import SideBarAdmin from './_components/SideBarAdmin';
import HeaderAdmin from './_components/HeaderAdmin';


const { Content } = Layout;

const LayoutAdmin: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className='h-screen'>
      <SideBarAdmin />
      <Layout>
        <HeaderAdmin />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
            <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;