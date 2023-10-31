import { SECURITY_TOKEN } from "../constants/config";
import Cookies from "js-cookie";

const DEFAUTL_OPTIONS = { method: "GET" };

export const fetchRequest = async (url, options = { method: "GET" }) => {
  let data = {};
  let status = "";

  try {
    const _options = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SECURITY_TOKEN}`,
      },
    };

    const _res = await fetch(url, _options);

    status = _res.status;
    const contentType = _res.headers.get("content-type");
    if (contentType?.includes("application/json")) data = await _res.json();
  } catch (error) {
    console.log("this is failure", url);
    console.warn(error.message);
  } finally {
    return { data, hasError: !(status === 200), status };
  }
};

export const fetchRequestWithAuth = async (url, options = DEFAUTL_OPTIONS) => {
  let data = null;
  // let hasError = false;
  let status = null;

  const _options = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("ACCESS_TOKEN")}`,
      // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFmYWIyM2U1LTRlN2MtNDg3NS1hYWI5LTJiMDQ3MzZkM2Q1OCIsInBob25lX251bWJlciI6Iis5MTIwOTMxMTI5NDkiLCJnZW5kZXIiOiJGIiwiZGVhY3RpdmF0ZWQiOmZhbHNlLCJyb2xlcyI6W3siaWQiOiJkMDE4YzI4OC04NmI1LTRjMWItYjM0Mi0zMTFmZGI2NzVjNzciLCJ1c2VyX2lkIjoiMWZhYjIzZTUtNGU3Yy00ODc1LWFhYjktMmIwNDczNmQzZDU4Iiwicm9sZV9pZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwNSIsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTA5VDE1OjQ0OjIzLjQzN1oiLCJ1cGRhdGVkX2F0IjoiMjAyMi0xMi0wOVQxNTo0NDoyMy40MzdaIn1dLCJpYXQiOjE2ODMyNjQwMTN9.iDa6ps4asFrqjKv8SmRa86SpppWT1KWM_LX8EBzfpnQ`,
    },
  };

  try {
    const _res = await fetch(url, _options);

    // data = await _res.json();
    status = _res.status;
    const contentType = _res.headers.get("content-type");
    if (contentType?.includes("application/json")) data = await _res.json();
  } catch (error) {
    console.log("this is failure", url);
    console.warn(error.message);
  } finally {
    return { data, hasError: !(status === 200), status };
  }
};
