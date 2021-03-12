@Main
{
    @Envs()
    {
        @BindRoot($.msg)($.input.0) 
    }
    @Invalid($.msg)
    {
        @BindRoot($.msg)("小改动")
    } 
    @Println("正在准备上传到仓库") 
    @Command("git add .")
    @Command("git commit -m $.msg")
    @Command("git push origin master")
    @Println("成功上传到仓库")
    @Println("") 
}