module.exports = {
    apps: [
        {
            name: 'newbee-mall',
            script: 'java',
            args: [
                '-jar',
                'target/newbee-mall.jar',
                '--server.port=8000',
                '--spring.datasource.url=jdbc:mysql://localhost:3306/newbee_mall_db?useUnicode=true&serverTimezone=Asia/Shanghai&characterEncoding=utf8&autoReconnect=true&useSSL=false&allowMultiQueries=true',
                '--spring.datasource.username=root',
                '--spring.datasource.password=123456',
                '--upload.path=/root/upload/'
            ],
            cwd: '.',
            interpreter: ''
        }
    ]
};
