<template>
    <div>
        <h3>用户管理系统</h3>
        <hr />
        <label class="searchKeywords">
            <input type="text" placeholder="请输入想要搜索的关键词" class="form-control" v-model="keywords" v-focus>
        </label>
        <table class="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in search(keywords)" :key="i">
                    <td>{{ item.name }}</td>
                    <td>{{ item.telphone }}</td>
                    <td>{{ item.email }}</td>
                    <td>
                        <router-link :to="'/showInfo/' + i">详情</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    data() {
        return {
            keywords: '',
            infolist: [
                { name: '张三', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '李四', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '王五', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '赵柳', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '娄山关', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '方硕', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '张三', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '张三', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '张三', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '张三', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '张三', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '张三', telphone: 13856623766, email: '1578964215@qq.com' },
                { name: '张三', telphone: 13856623766, email: '1578964215@qq.com' }
            ]
        };
    },
    methods: {
        search(keywords) {
            var newArr = [];
            newArr = this.infolist.filter((item) => {
                if (item.name.includes(keywords)) {
                    return item;
                }
            });
            return newArr;
        }
    }
}
</script>

<style lang="scss" scoped>
.searchKeywords {
    width: 100%;
}
</style>
