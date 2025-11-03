import emailjs from "@emailjs/browser";

emailjs.init("kiOin6a3GBvZ24zLx");

export const sendRegistrationEmail = async (
  userName: string,
  userEmail: string,
  eventName: string
): Promise<boolean> => {
  try {
    await emailjs.send("service_uimavov", "template_hn5tfd5", {
      user_name: userName,
      user_email: userEmail,
      event_name: eventName,
    });
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
