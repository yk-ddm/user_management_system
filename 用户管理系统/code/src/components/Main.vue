<template>
    <div>
        <div class="topbar">
            <div class="container">
                <div class="left">
                    <router-link to="/">用户管理系统</router-link>
                    <router-link to="/home">首页</router-link>
                    <router-link to="/aboutUs">关于我们</router-link>
                </div>
                <div class="right">
                    <router-link to="/addUser">添加用户</router-link>                    
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container">
                <router-view></router-view>                        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.container {
    width: 1100px;
    margin: 0 auto;
}
.topbar {
    background-color: #ccc;
    .container {
        line-height: 50px;
        &:after {
            content: '';
            display: block;
            clear: both;
        }
        .left {
            float: left;
        }
        .right {
            float: right;
        }
    }
}
.content {
    .container {

    }
}
</style>
