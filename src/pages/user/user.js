import React from "react";
import {Card, Input, Select, Button, Table,message,Tag} from 'antd';
import '../../api/index'
import {reqSearch, reqUserDataSource,reqSearchUser} from "../../api";
export default class User extends React.Component{

    state = {
        UserDataSource:[],
        InputValue:'',
        SelectValue:'',
    }

    getUserDataSource = async () =>{
        const result = await reqUserDataSource()
        const UserDataSource = result.data.data.list
        UserDataSource.map((item) => {
            if (item._id === '5f6aef6e07205969d6930088'){
                item['tags'] = ['ADMIN']
            }else {
                item['tags'] = ['普通用户']
            }
        })
        if (result.data.code === 0){
            this.setState({
                UserDataSource
            })
        }
    }

    searchUSer = async () =>{
        const {InputValue,SelectValue} = this.state
        const result = await reqSearchUser(InputValue,SelectValue)
        const UserDataSource = result.data.data.list
        UserDataSource.map((item) => {
            if (item._id === '5f6aef6e07205969d6930088'){
                item['tags'] = ['ADMIN']
            }else {
                item['tags'] = ['普通用户']
            }
        })
        if (result.data.code === 0){
            this.setState({
                UserDataSource
            })
        }
    }


    componentWillMount() {

         this.columns = [
            {
                title: '用户名',
                dataIndex: 'name',

            },
            {
                title: '邮箱',
                dataIndex: 'email',
            },
            {
                title: '手机',
                dataIndex: 'phone',
            },
            {
                title: '个人介绍',
                dataIndex: 'introduce',
            },
            {
                title: '类型',
                dataIndex: 'tags',
                render: tags => (
                    <>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'ADMIN') {
                                color = 'blue';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: '创建时间',
                dataIndex: 'create_time',
            },
            {
                title: '操作',
                render: tags => (
                    <Button type="primary">删除</Button>
                ),
            },
        ];

        this.getUserDataSource()
    }

    render() {
        const { Option } = Select
        const { UserDataSource } = this.state
        const title = (
            <div style={{width:100}}>
                <Input placeholder="用户名" onChange={(e) => {this.setState({InputValue:e.target.value})}}/>
                <Select
                    onSelect={(value => {this.setState({SelectValue:value})})}
                    style={{ width: 200 , margin:"0 10px",cursor:"pointer"}}
                    placeholder="选择类型"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="">所有</Option>
                    <Option value="1">管理员</Option>
                    <Option value="0">其他用户</Option>
                </Select>
                <Button onClick={this.searchUSer}>Search</Button>
            </div>
        )

        return (
            <Card title={title} style={{ width: '100%' }}>
                <Table columns={this.columns} dataSource={ UserDataSource } />
            </Card>
        );
    }
}