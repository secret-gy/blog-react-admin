import menuList from "../../config/menuConfig";
import React from "react";
import { Layout, Menu, Breadcrumb, } from 'antd';
import { Route, Switch,Redirect,Link } from 'react-router-dom'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    AndroidOutlined,
    HomeOutlined
} from '@ant-design/icons';

import Account from "../account/account";
import Article from "../article/article";
import Category from "../category/category";
import Dashboard from "../dashboard/dashboard";
import LinkRouter from "../link/link";
import Message from "../message/message";
import Project from "../project/project";
import Tag from "../tag/tag";
import TimeAxis from "../timeAxis/timeAxis";
import User from "../user/user";
import ArticleCreate from "../article/articleCreate";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export default class Home extends React.Component{
    state = {
        collapsed: false,
        MenuName:'',
        SubMenuName:'',
        SubMenuKey:'',
    };

    onCollapse = collapsed => {
        console.log(collapsed)
        this.setState({ collapsed });
    };


    getMenuList = (menuList,FItem) => {
        return menuList.map((Item,index) => {
            if (!Item.children){
                return (
                    <Menu.Item key={Item.key} onClick={(item) => {if (item.item.props.openKeys[0] !== this.state.SubMenuKey){if (item.item.props.openKeys[0] === undefined){ this.setState({MenuName:Item.title,SubMenuName:''})}else{ console.log('bugaizhixing '); this.setState({ SubMenuName:FItem.title,MenuName:Item.title})} }else {this.setState({MenuName:Item.title})}}}>
                        <Link key={index} to={Item.key}>{Item.title}</Link>
                    </Menu.Item>

                // <Menu.Item key={Item.key} onClick={(item) => {if (item.item.props.openKeys[0] !== this.state.SubMenuKey){{this.setState({SubMenuName:FItem.title,MenuName:Item.title})}}else {this.setState({MenuName:Item.title})}}}>
                //     {Item.title}
                // </Menu.Item>

                )
            }else {
                return (
                    <SubMenu key={Item.key} title={Item.title} onTitleClick={(item) => {if (Item.title !== this.state.SubMenuName){this.setState({SubMenuName:Item.title,MenuName:'',SubMenuKey:item.key})}}}>
                        {this.getMenuList(Item.children,Item)}
                    </SubMenu>
                )
            }
        })
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{display:"flex",height:60,alignItems:"center"}}>
                        <img style={{height:32, width:32,margin:"0 10px 0 30px"}} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
                        <span style={{fontSize:20,color:"white"}}>react-blog</span>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {this.getMenuList(menuList)}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '20px 16px' }}>
                        <Switch>
                            <Route exact path='/workplace' component={Dashboard}/>
                            <Route exact path="/userList" component={User}/>
                            <Route exact path='/articleList' component={Article}/>
                            <Route exact path='/ArticleCreate' component={ArticleCreate}/>
                            <Route exact path='/messageList' component={Message}/>
                            <Route exact path='/tagList' component={Tag}/>
                            <Route exact path='/linkList' component={LinkRouter}/>
                            <Route exact path='/categoryList' component={Category}/>
                            <Route exact path='/timeAxisList' component={TimeAxis}/>
                            <Route exact path='/projectList' component={Project}/>
                            <Route exact path='/accountList' component={Account}/>
                            <Redirect to='/home' component={Home}/>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}