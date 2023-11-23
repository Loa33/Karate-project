function fn() {

    const responseData ={};

    responseData.createResponse = (params) => {
        return {
          name: params.name,
          job: params.job,
          id: '#ignore',
          createdAt: '#ignore'
        };
    };

    responseData.updateResponse = (params) => {
      return {
          name: params.name,
          job: params.job,
          updatedAt: '#ignore'
      };
    };

    return responseData;
}