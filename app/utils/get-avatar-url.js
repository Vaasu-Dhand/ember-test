export default function getAvatarUrl(userId) {
  if (typeof userId !== 'number') throw Error('`userId` should be a number');

  // https://vinicius73.github.io/gravatar-url-generator/#/robohash
  const avatarsMap = [
    'https://robohash.org/2775ebcad9c9807b28f70d1551bb1b43?set=set4&bgset=&size=200x200',
    'https://robohash.org/536d81cca2e74ea3d866d081bfea66a8?set=set4&bgset=&size=200x200',
    'https://robohash.org/9aea7bd8455e2acd200e2420bee6226a?set=set4&bgset=&size=200x200',
    'https://robohash.org/f832e168baa9a0e522789ad86d8134d9?set=set4&bgset=&size=200x200',
    'https://robohash.org/5284975d0aa64fbbe2b08eba5e09a06c?set=set4&bgset=&size=200x200',
    'https://robohash.org/a0a11ae9444ae059fa1cf85c3ef1b258?set=set4&bgset=&size=200x200',
    'https://robohash.org/15807ed56c1f8fa2e3dbf2b9a85e5de2?set=set4&bgset=&size=200x200',
    'https://robohash.org/5d2190c36eac160ac121178404aa8ea5?set=set4&bgset=&size=200x200',
    'https://robohash.org/29de68e08fca38c5f8c491f2d7e75c53?set=set4&bgset=&size=200x200',
    'https://robohash.org/759858605f2629518f7525e6daf3530d?set=set4&bgset=&size=200x200',
    'https://robohash.org/8f0b4486a57dbb3ffa30b3b864b3ab1b?set=set4&bgset=&size=200x200',
  ];
  return avatarsMap[userId];
}
