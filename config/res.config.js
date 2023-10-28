const defaultresponse = {
  result: false,
  message: "something bad happend",
  status: 5000,
};

module.exports = {
  success: {
    findAll: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "all documents retrived successfully",
        status: 2001,
        data,
      };
    },

    upDate: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "data update successfully",
        status: 2002,
        data,
      };
    },

    userDelete: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "data delete successfully",
        status: 2003,
        data,
      };
    },

    userGetId: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "data getBy Id successfully",
        status: 2004,
        data,
      };
    },

    signup: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "User data posted successfully",
        status: 2005,
        data,
      };
    },

    // comments success

    commentsFindAll: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "all comments retrieved successfully",
        status: 2007,
        data,
      };
    },

    commentsPost: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "comments posts are success",
        status: 2008,
        data,
      };
    },

    commentsPut: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "comments update successfully",
        status: 2009,
        data,
      };
    },

    commentsDelete: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "comments delete successfully",
        status: 2010,
        data,
      };
    },

    commentsGetById: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "comments getById successfully",
        status: 2011,
        data,
      };
    },
    createPost: (data) => {
      return {
        ...defaultresponse,
        result: true,
        message: "posts are success",
        status: 2002,
        data,
      };
    },
  },

  // person and story success

  findAll: (data) => {
    return {
      ...defaultresponse,
      result: true,
      message: "all documents retrived successfully",
      status: 2001,
      data,
    };
  },



  upDate: (data) => {
    return {
      ...defaultresponse,
      result: true,
      message: "data update successfully",
      status: 2003,
      data,
    };
  },

  Delete: (data) => {
    return {
      ...defaultresponse,
      result: true,
      message: "data delete successfully",
      status: 2004,
      data,
    };
  },

  failure: {
    findAll: (data) => {
      return {
        ...defaultresponse,
        message: "failed to fetch data",
        status: 3001,
        data,
      };
    },

    upDate: (data) => {
      return {
        ...defaultresponse,
        message: "failed to update",
        status: 3002,
        data,
      };
    },

    userDelete: (data) => {
      return {
        ...defaultresponse,
        message: "failed to delete",
        status: 3003,
        data,
      };
    },

    userGetId: (data) => {
      return {
        ...defaultresponse,
        message: "failed to getBy Id",
        status: 3004,
        data,
      };
    },

    signup: (data) => {
      return {
        ...defaultresponse,
        message: "failed to posted User",
        status: 3005,
        data,
      };
    },

    // comments failure
    commentsFindAll: (data) => {
      return {
        ...defaultresponse,
        message: "failed to fetch comments",
        status: 3007,
        data,
      };
    },

    commentsPost: (data) => {
      return {
        ...defaultresponse,
        message: "failed to post comments",
        status: 3008,
        data,
      };
    },

    commentsPut: (data) => {
      return {
        ...defaultresponse,
        message: "comments failed to update ",
        status: 3009,
        data,
      };
    },

    commentsDelete: (data) => {
      return {
        ...defaultresponse,
        message: "comments failed to delete",
        status: 3010,
        data,
      };
    },

    commentsGetById: (data) => {
      return {
        ...defaultresponse,
        message: "comments failed to getById",
        status: 3011,
        data,
      };
    },
  },

  // person and story failure

  findAll: (data) => {
    return {
      ...defaultresponse,
      message: "failed to fetch data",
      status: 3001,
      data,
    };
  },

  createPost: (data) => {
    return {
      ...defaultresponse,
      message: "failed to post",
      status: 3002,
      data,
    };
  },

  upDate: (data) => {
    return {
      ...defaultresponse,
      message: "failed to update",
      status: 3003,
      data,
    };
  },

  Delete: (data) => {
    return {
      ...defaultresponse,
      message: "failed to delete",
      status: 3004,
      data,
    };
  },

  resexception: {
    findAll: (data) => {
      return {
        ...defaultresponse,
        status: 4001,
        data,
      };
    },

    upDate: (data) => {
      return {
        ...defaultresponse,
        status: 4002,
        data,
      };
    },

    userDelete: (data) => {
      return {
        ...defaultresponse,
        status: 4003,
        data,
      };
    },

    userGetId: (data) => {
      return {
        ...defaultresponse,
        status: 4004,
        data,
      };
    },

    signup: (data) => {
      return {
        ...defaultresponse,
        status: 4005,
        data,
      };
    },

    // comments exception

    commentsFindAll: (data) => {
      return {
        ...defaultresponse,
        status: 4007,
        data,
      };
    },

    commentsPost: (data) => {
      return {
        ...defaultresponse,
        status: 4008,
        data,
      };
    },

    commentsPut: (data) => {
      return {
        ...defaultresponse,
        status: 4009,
        data,
      };
    },

    commentsDelete: (data) => {
      return {
        ...defaultresponse,
        status: 4010,
        data,
      };
    },

    commentsGetById: (data) => {
      return {
        ...defaultresponse,
        status: 4011,
        data,
      };
    },

    // person and story exception

    findAll: (data) => {
      return {
        ...defaultresponse,
        status: 4001,
        data,
      };
    },

    createPost: (data) => {
      return {
        ...defaultresponse,
        status: 4002,
        data,
      };
    },

    upDate: (data) => {
      return {
        ...defaultresponse,
        status: 4003,
        data,
      };
    },

    Delete: (data) => {
      return {
        ...defaultresponse,
        status: 4004,
        data,
      };
    },
  },
};
