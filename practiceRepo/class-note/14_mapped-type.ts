type Heroes = 'Hulk' | 'Capt' | 'Thor';

// 각각 이름을 key로 받아 새로운 타입을 정의해보자.
type HeroAges = { [K in Heroes]: number }
const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
}