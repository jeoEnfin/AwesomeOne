export const avatars = [
    {
      name: 'avatar_1',
      source: require('../Assets/avatars/default_(1).png'),
    },
    {
      name: 'avatar_2',
      source: require('../Assets/avatars/default_(2).png'),
    },
    {
      name: 'avatar_3',
      source: require('../Assets/avatars/default_(3).png'),
    },
    {
      name: 'avatar_4',
      source: require('../Assets/avatars/default_(4).png'),
    },
    {
      name: 'avatar_5',
      source: require('../Assets/avatars/default_(5).png'),
    },
    {
      name: 'avatar_6',
      source: require('../Assets/avatars/default_(6).png'),
    },
    {
      name: 'avatar_7',
      source: require('../Assets/avatars/default_(7).png'),
    },
    {
      name: 'avatar_8',
      source: require('../Assets/avatars/default_(8).png'),
    },
    {
      name: 'avatar_9',
      source: require('../Assets/avatars/default_(9).png'),
    },
    {
      name: 'avatar_10',
      source: require('../Assets/avatars/default_(10).png'),
    },
    {
      name: 'avatar_11',
      source: require('../Assets/avatars/default_(11).png'),
    },
    {
      name: 'avatar_12',
      source: require('../Assets/avatars/default_(12).png'),
    },
    {
      name: 'avatar_13',
      source: require('../Assets/avatars/default_(13).png'),
    },
    {
      name: 'avatar_14',
      source: require('../Assets/avatars/default_(14).png'),
    },
    {
      name: 'avatar_15',
      source: require('../Assets/avatars/default_(15).png'),
    },
  ];
  
  export const getAvatar = (avatar = 'avatar_1') => {
    for (selected of avatars) {
      if (selected.name === avatar) return selected.source;
    }
    return avatars[0].source;
  };

export const ringColor = (level = 0) => {
    if (level === 1 || level === 0) return '#8a2be2';
    if (level === 2) return 'blue';
    if (level === 3) return 'cyan';
    if (level === 4) return 'chartreuse';
    if (level === 5) return 'yellow';
    if (level === 6) return 'orange';
    if (level === 7) return '#dda0dd';
    if (level === 8) return '#ff1493';
    if (level === 9) return 'black';
    if (level === 10) return '#8a2be2';
  };

  export const levelUpAnimation = (level = 0) => {
    if (level === 1 || level === 0) return LevelUpScreen1;
    if (level === 2) return LevelUpScreen2;
    if (level === 3) return LevelUpScreen3;
    if (level === 4) return LevelUpScreen4;
    if (level === 5) return LevelUpScreen5;
    if (level === 6) return LevelUpScreen6;
    if (level === 7) return LevelUpScreen7;
    if (level === 8) return LevelUpScreen8;
    if (level === 9) return LevelUpScreen9;
    if (level === 10) return LevelUpScreen10;
  };
