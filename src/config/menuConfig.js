import {HomeOutlined} from '@ant-design/icons';
const menuList = [
    {
        title: 'Dashboard', // 菜单标题名称
        key: '/dashboard', // 对应的path
        icon: 'HomeOutlined', // 图标名称
        children: [ // 子菜单列表
            {
                title: '工作台',
                key: '/workplace',
                icon: 'HomeOutlined'
            }
        ]
    },
    {
        title: '用户管理',
        key: '/user',
        icon: 'appstore',
        children: [ // 子菜单列表
            {
                title: '用户列表',
                key: '/userList',
                icon: 'bars'
            },
        ]
    },
    {
        title: '文章',
        key: '/article',
        icon: 'user',
        children: [ // 子菜单列表
            {
                title: '文章列表',
                key: '/articleList',
                icon: 'bars'
            },
            {
                title: '文章创作',
                key: '/articleCreate',
                icon: 'bars'
            },
        ]
    },
    {
        title: '留言',
        key: '/message',
        icon: 'safety',
        children: [ // 子菜单列表
            {
                title: '留言列表',
                key: '/messageList',
                icon: 'bars'
            },
        ]
    },
    {
        title: '标签',
        key: '/tag',
        icon: 'area-chart',
        children: [
            {
                title: '标签列表',
                key: '/tagList',
                icon: 'bar-chart'
            },
        ]
    },
    {
        title: '友情链接',
        key: '/link',
        icon: 'area-chart',
        children: [
            {
                title: '标签列表',
                key: '/linkList',
                icon: 'bar-chart'
            },
        ]
    },
    {
        title: '分类',
        key: '/category',
        icon: 'area-chart',
        children: [
            {
                title: '分类列表',
                key: '/categoryList',
                icon: 'bar-chart'
            },
        ]
    },
    {
        title: '时间轴',
        key: '/timeAxis',
        icon: 'area-chart',
        children: [
            {
                title: '时间轴列表',
                key: '/timeAxisList',
                icon: 'bar-chart'
            },
        ]
    },
    {
        title: '项目',
        key: '/project',
        icon: 'area-chart',
        children: [
            {
                title: '项目列表',
                key: '/projectList',
                icon: 'bar-chart'
            },
        ]
    },
    {
        title: '个人中心',
        key: '/account',
        icon: 'area-chart',
        children: [
            {
                title: '个人设置',
                key: '/settings',
                icon: 'bar-chart'
            },
        ]
    },
]


export default menuList

