

export const getUsers = async (num = 40) => {
  const results = await fetch(`https://randomuser.me/api?results=${num}`);
  return results.json();
};