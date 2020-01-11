import * as AWS from "aws-sdk";
import * as AWSXRay from "aws-xray-sdk";
const XAWS = AWSXRay.captureAWS(AWS);

const s3 = new XAWS.S3({
  signatureVersion: "v4"
});

const bucketName = process.env.IMAGES_S3_BUCKET;
const urlExpiration = process.env.SIGNED_URL_EXPIRATION;

/**
 * Gets upload url
 * @param todoId
 * @returns
 */
export async function getUploadUrl(todoId: string) {
  return s3.getSignedUrl("putObject", {
    Bucket: bucketName,
    Key: todoId,
    Expires: urlExpiration
  });
}
