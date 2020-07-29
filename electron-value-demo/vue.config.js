module.exports = {
  pluginOptions: {
    electronBuilder: {
      disableMainProcessTypescript: false,
      mainProcessTypeChecking: false,
      mainProcessFile: 'src/electron/background.ts',
      builderOptions: {
        appId: 'dow.electron.coredemo',
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true,
        },
        win: {
          target: ['nsis', 'portable'],
          icon: 'public/favicon.ico',
        },
        // mac: { icon: 'public/macfavicon.ico' },
      },
    },
  },

  pages: {
    index: {
      entry: 'src/renderer/main.ts',
      template: 'public/index.html',
    },
  },
};
