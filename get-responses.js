// netlify/functions/get-responses.js
export async function handler(event, context) {
    const formName = "stockholm-feedback"; // samma namn som i index.html
    const token = process.env.NETLIFY_API_TOKEN; // lägg in i Netlify settings
  
    try {
      // 1. hämta alla formulär
      const formsResponse = await fetch("https://api.netlify.com/api/v1/forms", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const forms = await formsResponse.json();
      const form = forms.find((f) => f.name === formName);
  
      if (!form) {
        return { statusCode: 404, body: "Form not found" };
      }
  
      // 2. hämta submissions för rätt form
      const submissionsResponse = await fetch(
        `https://api.netlify.com/api/v1/forms/${form.id}/submissions`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const submissions = await submissionsResponse.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(submissions),
      };
    } catch (err) {
      return { statusCode: 500, body: err.toString() };
    }
  }
  