## Claudia common commands
`export AWS_PROFILE=claudia`
`claudia --help`
`claudia update`
`claudia destroy`

```
claudia create \
    --region eu-central-1 \
    --api-module api
```

## Npm common commands

## Curl comman commands
```
curl -i \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"name":"Dalat Land","description":"","metadata":[{"name":"location","value":"Dalat, Vietnam"},{"name":"category","value":"real estate"}]}' \
  https://q5svg15qs0.execute-api.eu-central-1.amazonaws.com/latest/assets

curl -i \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"pizzaId":2,"address":"221 Baker Street"}' \
  https://q5svg15qs0.execute-api.eu-central-1.amazonaws.com/latest/assets/1

curl -i \
  -H "Content-Type: application/json" \
  -X DELETE \
  https://q5svg15qs0.execute-api.eu-central-1.amazonaws.com/latest/assets/1
```

## Aws commands
```
aws dynamodb create-table --table-name pocket-assets \
  --attribute-definitions AttributeName=assetId,AttributeType=S \
  --key-schema AttributeName=assetId,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
  --region eu-central-1 \
  --query TableDescription.TableArn --output text

arn:aws:dynamodb:eu-central-1:827726978788:table/pocket-assets

aws dynamodb scan \
  --table-name pocket-assets \
  --region eu-central-1 \
  --output json
```

```
aws iam put-role-policy \
  --role-name my-pocket-api-executor \
  --policy-name PocketApiDynamoDB \
  --policy-document file://./roles/dynamodb.json
```
