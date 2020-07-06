module.exports = {
    apps: [
        {
            name: 'newbee-mall',
            script: 'java',
            args: [
                '-jar',
                'target/newbee-mall.jar',
                '--server.port=80'
            ],
            cwd: '.',
            interpreter: ''
        }
    ]
};
