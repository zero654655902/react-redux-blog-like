let _posts=[
    {
        _id:'111',
        title:'hello git',
        like:1
    },
    {
        _id:'222',
        title:'hello react',
        like:1
    }
]
export default {
    getPosts(cb){
        setTimeout(()=>cb(_posts),2000)

    }
}