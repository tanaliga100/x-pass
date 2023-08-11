export const postToJSON = (doc) => {
  const data = doc.data();
  return {
    ...data,
    published: data?.published?.toMillis(),
  };
};
