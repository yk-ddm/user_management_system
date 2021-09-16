<template>
    <div>
        <routerLink to="/home" class="btn btn-primary">返回</routerLink>
        <div class="showinfo">
            <div class="left">
                <h3>{{ info.name }}</h3>
            </div>
            <div class="right">
                <router-link :to="'/editinfo/' + this.$route.params.id" class="btn btn-primary">编辑</router-link>
                <router-link to="/home" class="btn btn-danger" @click="deleteinfo">删除</router-link>
            </div>
        </div>
        <hr />
        
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import 'mint-ui/lib/style.css';

export default {
    data() {
        return {
            info: { name: '张三', telphone: 12345678925, email: '1456827936@qq.com' }
        };
    },
    methods: {
        deleteinfo() {
            Toast('删除成功');
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-primary {
    margin-top: 15px;
}
.showinfo {
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
        .btn-danger {
            margin-top: 15px;
        }
    }
}
</style>
