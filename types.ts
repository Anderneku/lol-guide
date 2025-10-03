type champion = {
  name: string;
  image: { full: string };
  id: string;
  key: string;
  title: string;
};

type championData = {
  spells: [{ id: string; description: string }];
};
