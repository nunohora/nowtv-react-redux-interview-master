export const formatMessages = (messages, members) =>
  messages
    .map(({ userId, ...rest }) => {
      const { avatar, email, firstName, lastName } = members.find(({ id }) => id === userId);
      return {
        ...rest,
        avatar,
        email,
        fullName: `${firstName} ${lastName}`,
        userId,
      };
    })
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
