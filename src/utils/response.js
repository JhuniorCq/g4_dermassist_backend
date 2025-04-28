const buildResponse = ({ success, message, payload = null }) => {
  if (success) {
    return {
      success: true,
      message,
      data: payload,
    };
  } else {
    return {
      success: false,
      message,
      error: payload,
    };
  }
};

export default buildResponse;
