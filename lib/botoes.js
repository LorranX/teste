
module.exports = (LorranX) => {

        //BOTÃO NORMAL
        function sendButtonMsg(text, footer, but = [], options = {}) {
    const buttonMessage = {
      contentText: text,
      footerText: footer,
      buttons: but,
      headerType: 1
    };
    LorranX.sendMessage(
      from,
      buttonMessage,
      buttonsMessage,
      options
    );
  }
            ///BOTÃO DE IMAGEM
    async function sendButImage(from, text1, desc1, gam1, but = [], options = {}) {
    kma = gam1;
    mhan = await LorranX.prepareMessage(from, kma, image);
    const buttonMessages = {
      imageMessage: mhan.message.imageMessage,
      contentText: text1,
      footerText: desc1,
      buttons: but,
      headerType: 4
    };
    LorranX.sendMessage(
      from,
      buttonMessages,
      buttonsMessage,
      options
    );
  }
            ///BOTÃO DE VIDEO
      async function sendButVideo(from, text1, desc1, vid1, but = [], options = {}) {
    kma = vid1;
    mhan = await LorranX.prepareMessage(from, kma, video);
    const buttonMessages = {
      videoMessage: mhan.message.videoMessage,
      contentText: text1,
      footerText: desc1,
      buttons: but,
      headerType: 5
    };
    LorranX.sendMessage(from,
      buttonMessages,
      buttonsMessage,
      options
    );
  }
            ///BOTÃO DE LOC
      async function sendButLocation(from, text1, desc1, gam1, but = [], options = {}) {
    kma = gam1;
    mhan = await LorranX.prepareMessage(from, kma, location);
    const buttonMessages = {
      locationMessage: mhan.message.locationMessage,
      contentText: text1,
      footerText: desc1,
      buttons: but,
      headerType: 6
    };
    LorranX.sendMessage(from,
      buttonMessages,
      MessageType.buttonsMessage,
      options
    );
  }
      module.exports.sendButtonMsg = sendButtonMsg
      module.exports.sendButImage = sendButImage
      module.exports.sendButVideo = sendButVideo
      module.exports.sendButLocation = sendButLocation      
    };