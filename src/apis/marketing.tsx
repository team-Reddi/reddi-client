import client from "./client";

export const getMarketingList = async (params: {
  page: number;
  size: number;
}) => {
  try {
    const response = await client.get("api/post/", {
      params: {
        page: params.page,
        size: params.size,
      },
    });
    console.log("marketing list data", response.data);
    return response.data.data.content;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMarketingDetail = async (pageId: number) => {
  try {
    const response = await client.get(`/api/post/${pageId}`, {
      params: {
        id: pageId,
      },
    });
    console.log(response.data);
    return response.data.data.content;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};