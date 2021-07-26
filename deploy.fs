@Main
{
    @Println("准备上传 git 目录")

    @Command("git add .")
    @Command("git commit -m init")
    @Command("git push origin master")
    
    @Println("上传成功")
    @Println("")
}