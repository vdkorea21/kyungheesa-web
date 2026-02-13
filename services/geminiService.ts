
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generatePropStories() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Create 4 poetic and warm descriptions for aesthetic props found in a Seoul gift shop named 'KYUNG HEE SA'. Return as a JSON array of objects with 'title' and 'description'. Focus on themes of warmth, Korean history, traditional craftsmanship, and small daily happiness.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["title", "description"]
          }
        }
      }
    });

    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Error generating prop stories:", error);
    // Fallback data
    return [
      {
        title: "The Morning Teacup",
        description: "A ceramic companion that holds the first light of the morning and the steam of your favorite tea."
      },
      {
        title: "Linen Memories",
        description: "Soft textiles hand-woven with patterns inspired by the traditional tiles of Seoul roofs."
      },
      {
        title: "Wooden Whispers",
        description: "Hand-carved trays that carry the scent of aged pine and the warmth of a craftsman's hands."
      },
      {
        title: "Brass Sunlight",
        description: "Small bells that catch the light and chime softly with every passing breeze."
      }
    ];
  }
}
