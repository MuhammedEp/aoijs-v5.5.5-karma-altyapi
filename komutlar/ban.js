module.exports={
name:"ban",
code:`
$argsCheck[>1;Lütfen yasaklanacak kişiyi etiketleyin]
$onlyIF[$findeMember[$mentioned[1]]==$roleID;Yasaklanak kullanıcıyı etiketleyin lütfen]
$author[1;$userTag yasaklamak istiyormusun?;$authorAvatar;]
$thumbnail[1;$userAvatar[$mentioned[1]]]

$description[1;
**Yasaklanacak kişi:**
$userTag[$mentioned[1]]

**Yasaklanma sebebi:**
$noMentionMessage
]
`
}