module.exports = {
    apps: [
        {
            name: 'newbee-mall',
            script: 'java',
            args: [
                '-jar',
                'target/newbee-mall.jar',
                '--server.port=80',
                '--upload.path=E:\\upload\\'
            ],
            cwd: '.',
            interpreter: ''
        }
    ]
};
