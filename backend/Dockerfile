FROM gradle 
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY src .
COPY gradlew build.gradle ./
EXPOSE 8080
CMD ["gradle", "build"]
