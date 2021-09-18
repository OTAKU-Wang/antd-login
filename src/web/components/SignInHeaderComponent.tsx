import '../../css/App.less'
import { FC } from 'react';
import { PageHeader, Button } from 'antd';

const SignInHeaderComponent: FC = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="星环"
                subTitle="欢迎登陆星环TDH"
                extra={[
                    <Button key="2">注册</Button>,
                    <Button key="1" type="primary">
                        登录
                    </Button>,
                ]}
            >
            </PageHeader>
        </div>
    );
}

export default SignInHeaderComponent;