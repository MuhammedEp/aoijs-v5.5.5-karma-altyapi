
module.exports = [{
  name:"emojiler",
  code:`
  $setMessageVar[id;$authorID;$get[id]]
  $let[id;$apiMessage[$channelID;;{newEmbed:{color:GREEN}{author:$serverName[$guildID] Sunucusunun Emojileri:$serverIcon}{thumbnail:$authorAvatar}{footer:Sorgulayan $userTag:$authorAvatar}{description:
  $serverEmojis
  }};{actionRow:{button:Emojileri Winrarla:1:winrar:no:📚}{button:Sil:2:sil:no:🗑️};;;;;yes]]
  `
},{
  name:"winrar",
  $if: "v4",
  type:"interaction",
  prototype:"button",
  code:`$interactionReply[selam]
$interactionDefer[yes]

  
  `
  
},{
  
  name:"sil",
  $if: "v4",
  type:"interaction",
  prototype:"button",
  code:`
  $deleteMessage[$messageID;$channelID]
  `
}]