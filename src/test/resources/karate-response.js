function fn() {

    const responseData ={};

    responseData.createResponse = (params) => {
        return {
          name: params.name,
          job: params.job,
          id: '#string',
          createdAt: '#notnull'
        };
    };

    responseData.updateResponse = (params) => {
      return {
          name: params.name,
          job: params.job,
          updatedAt: '#notnull'
      };
    };

    return responseData;
}