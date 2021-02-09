 <template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1', '3']" :active-text-color='active'>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-document"></i>内容管理</template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item  
             index="/articles/index">文章列表</el-menu-item>
            <el-menu-item 
             index="/articles/create">新建文章</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-phone" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>djping</span>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
export default {
  data() {
    return {}
  },
  computed:{
    active() {
      return '#409EFF'
    }
  }
}
</script>

