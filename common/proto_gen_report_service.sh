#!/bin/bash

PROTO_DIR=./proto/services/report

# Generate JS code
yarn run grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ \
--grpc_out=./ \
--plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
./proto/services/report/report_service.proto


# Generate TS code
grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=./ \
./proto/services/report/report_service.proto
